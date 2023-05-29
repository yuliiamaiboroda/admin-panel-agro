import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, useQueryParams } from 'hooks';
import { getAllResumes } from 'redux/resumes';
import { getAllVacancyTitles, selectVacancyTitles } from 'redux/vacancies';

export default function ResumesFilter() {
  const [queryParams, setQueryParams] = useQueryParams();
  const titles = useAppSelector(selectVacancyTitles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllVacancyTitles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllResumes(queryParams));
  }, [dispatch, queryParams]);

  return (
    <>
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
    </>
  );
}
