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

  const getSearchQueryParams = () => {
    const queryParams: { [x: string]: string } = {};

    searchParams.forEach((value, key) => (queryParams[key] = value));

    return queryParams;
  };

  const updateSearchQueryParams = (object: { [x: string]: string }) => {
    const queryParams = getSearchQueryParams();

    Object.entries(object).forEach(([key, value]) => {
      if (!value) {
        delete queryParams[key];
      } else {
        queryParams[key] = value;
      }
    });

    setSearchParams(queryParams);
  };

  const params = getSearchQueryParams();

  useEffect(() => {
    dispatch(getAllVacancyTitles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllResumes(params));
  }, [dispatch, params]);

  if (error) {
    Notify.failure(error);
  }

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
