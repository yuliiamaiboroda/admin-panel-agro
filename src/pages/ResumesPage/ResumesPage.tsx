import { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';
import { getAllResumes, selectResumeError } from 'redux/resumes';
import { getAllVacancyTitles, selectVacancyTitles } from 'redux/vacancies';
import ResumesGallery from 'components/ResumesGallery';
import Modal from 'components/Modal';
import ResumeForm from 'components/ResumeForm';

export default function ResumesPage() {
  const dispatch = useAppDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const error = useAppSelector(selectResumeError);
  const titles = useAppSelector(selectVacancyTitles);
  const [searchParams, setSearchParams] = useSearchParams();
  const positionParam = searchParams.get('position');
  const sortParam = searchParams.get('sort');

  useEffect(() => {
    dispatch(getAllVacancyTitles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllResumes({ position: positionParam }));
  }, [dispatch, positionParam]);

  if (error) {
    Notify.failure(error);
  }

  const updateSearchQueryParams = (object: { [x: string]: string }) => {
    const pervParams: { [x: string]: string } = {};

    searchParams.forEach((value, key) => (pervParams[key] = value));

    Object.entries(object).forEach(([key, value]) => {
      if (value === '') {
        delete pervParams[key];
      } else {
        pervParams[key] = value;
      }
    });

    setSearchParams(pervParams);
  };

  return (
    <>
      <h1>This is ResumesPage!</h1>
      <select
        onChange={({ target }) =>
          updateSearchQueryParams({ position: target.value })
        }
        value={positionParam ? positionParam : ''}
      >
        <option value="">All</option>
        {titles.map(({ _id, title }) => (
          <option key={_id} value={title}>
            {title}
          </option>
        ))}
        <option value="other">Other</option>
      </select>
      <select
        onChange={({ target }) =>
          updateSearchQueryParams({ sort: target.value })
        }
        value={sortParam ? sortParam : ''}
      >
        <option value="">Newer</option>
        <option value="asc">Older</option>
      </select>
      <button type="button" onClick={openModal}>
        Create resume
      </button>
      <ResumesGallery />
      <Outlet />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ResumeForm onSubmit={closeModal} />
        </Modal>
      )}
    </>
  );
}
