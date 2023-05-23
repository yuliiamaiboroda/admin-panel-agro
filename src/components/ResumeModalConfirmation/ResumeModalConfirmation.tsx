import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { removeResume, selectCertainResume } from 'redux/resumes';

export default function ResumeModalConfirmation() {
  const resume = useAppSelector(selectCertainResume);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/resumes';

  if (!resume) {
    return null;
  }

  return (
    <>
      <h1>Are you sure want to delete the {resume.name}`s resume?</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(removeResume(resume._id));
          navigate('/resumes');
        }}
      >
        Yes
      </button>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Cancel
      </button>
    </>
  );
}
