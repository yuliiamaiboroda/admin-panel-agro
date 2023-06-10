import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { removeResume, selectCertainResume } from 'redux/resumes';
import ConfirmationModal from 'components/ConfirmationModal';

export default function ResumeModalConfirmation() {
  const resume = useAppSelector(selectCertainResume);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/resumes';

  if (!resume) {
    return null;
  }

  const handleConfirm = () => {
    dispatch(removeResume(resume._id));
    navigate('/resumes');
  };

  const handleCancel = () => navigate(backLinkHref);

  return (
    <ConfirmationModal
      title={`Ви дійсно хочете видалити резюме "${resume.name}"?`}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
}
