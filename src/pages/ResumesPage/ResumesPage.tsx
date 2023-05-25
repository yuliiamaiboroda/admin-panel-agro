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
  const position = searchParams.get('position');

  useEffect(() => {
    dispatch(getAllVacancyTitles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllResumes({ position }));
  }, [dispatch, position]);

  if (error) {
    Notify.failure(error);
  }

  console.log("searchParams.get('position'):\n", searchParams.get('position'));

  const updateQueryString = (position: string) => {
    const nextParams: {} | { position: string } =
      position !== '' ? { position } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <h1>This is ResumesPage!</h1>
      <select
        onChange={({ target }) => updateQueryString(target.value)}
        value={position ? position : ''}
      >
        <option value="">Chosse option</option>
        {titles.map(({ _id, title }) => (
          <option key={_id} value={title}>
            {title}
          </option>
        ))}
        <option value="other">Other</option>
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
