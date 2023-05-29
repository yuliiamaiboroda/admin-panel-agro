import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, useQueryParams } from 'hooks';
import { getAllResumes } from 'redux/resumes';
import { getAllVacancyTitles, selectVacancyTitles } from 'redux/vacancies';

const LIMIT = [
  { value: '2', label: 2 },
  { value: '5', label: 5 },
  { value: '10', label: 10 },
  { value: '15', label: 15 },
  { value: '', label: 20 },
  { value: '25', label: 25 },
  { value: '30', label: 30 },
  { value: '40', label: 40 },
  { value: '50', label: 50 },
];

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
      <select
        onChange={({ target }) => setQueryParams({ limit: target.value })}
        value={queryParams.limit ? queryParams.limit : ''}
      >
        {LIMIT.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}
