import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';
import {
  useAppDispatch,
  useAppSelector,
  useModal,
  useQueryParams,
} from 'hooks';
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
  const [queryParams, setQueryParams] = useQueryParams();

  useEffect(() => {
    dispatch(getAllVacancyTitles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllResumes(queryParams));
  }, [dispatch, queryParams]);

  if (error) {
    Notify.failure(error);
  }

  return (
    <>
      <h1>This is ResumesPage!</h1>
      <select
        onChange={({ target }) => setQueryParams({ position: target.value })}
        value={queryParams.position ? queryParams.position : ''}
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
        onChange={({ target }) => setQueryParams({ sort: target.value })}
        value={queryParams.sort ? queryParams.sort : ''}
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
