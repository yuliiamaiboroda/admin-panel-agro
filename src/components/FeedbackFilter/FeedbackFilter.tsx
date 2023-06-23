import { useAppDispatch, useQueryParams } from 'hooks';
import { useEffect } from 'react';
import { getAllFeedback } from 'redux/feedbacks';

export default function FeedbackFilter() {
  const dispatch = useAppDispatch();
  const [queryParams, setQueryParams] = useQueryParams();

  useEffect(() => {
    dispatch(getAllFeedback(queryParams));
  }, [dispatch, queryParams]);
  return (
    <>
      <label>
        Показати улюблені
        <input
          type="checkbox"
          name="isFavorite"
          checked={queryParams.isFavorite ? true : false}
          onChange={({ target }) =>
            setQueryParams({ isFavorite: target.checked ? 'true' : '' })
          }
        />
      </label>
      <select
        onChange={({ target }) => setQueryParams({ sort: target.value })}
        value={queryParams.sort ? queryParams.sort : ''}
      >
        <option value="">Спочатку нові</option>
        <option value="asc">Спочатку старі</option>
      </select>
    </>
  );
}
