import FeedbackGallery from 'components/Feedback/FeedbackGallery';
import PageTitle from 'components/PageTitle';

export default function FeedbackPage() {
  return (
    <>
      <PageTitle title="Отримані фідбеки" />
      <FeedbackGallery />
    </>
  );
}
