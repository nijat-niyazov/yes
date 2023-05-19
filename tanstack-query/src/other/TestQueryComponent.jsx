import { useQuery } from '@tanstack/react-query';
import { fetchCities } from './apiTest';

const TestQueryComponent = () => {
  const {
    data,
    // dataUpdatedAt,
    // errorUpdateCount,
    // errorUpdatedAt,
    // failureCount,
    // failureReason,
    // isFetched,
    // isFetchedAfterMount,
    isInitialLoading, // --> used in scenario where you first time has not downloaded yet
    error, // -->  show an error
    isError, // --> error got
    isLoading, // --> loads query
    status, // --> (loading,error,success)
    isSuccess, // ❌ --> sucessfully
    fetchStatus, // --> ❌ (fetching, paused,idle )  fetching we know, paused fetch has stopped, idle(not doing anything)
    isFetching, // --> ❌
    // isLoadingError,
    // isPaused,
    // isPlaceholderData,
    isPreviousData, // --> Will be true when keepPreviousData is true and used for disable next,prev pages while we see previousData
    // isRefetchError,
    // isRefetching,
    // isStale,
    // refetch,
    // remove,
  } = useQuery({
    queryKey: ['cities'], // --> queryKey for cahcing data with key
    queryFn: fetchCities, // --> fetch function
    // useErrorBoundary,
    // cacheTime,
    // context,
    // behavior,
    enabled: false || true, // --> based on condition if enabled is false it won't fetch, and default is true
    // initialData,
    // initialDataUpdatedAt,
    // isDataEqual,
    keepPreviousData: true, // --> it's default false, but when we set it to true it means we will se cached data untill new data is fetched or updated
    // meta,
    // networkMode,
    // notifyOnChangeProps,
    // placeholderData,
    // queryHash,
    // queryKeyHashFn,
    refetchInterval: false || 5000, // --> it refetch with interval if false there is no interval or we can set it to given time for example for realTime data it can be 1000ms
    // refetchIntervalInBackground,
    // refetchOnMount,
    // refetchOnReconnect,
    refetchOnWindowFocus: true || false, // --> when user is focused on window or intergrated with app
    retry: false || 10, // --> by defualt its 3 and it means tries fetch for given numver time or false when we want fetch only for 1 time and setting to true means for infinitive requests
    retryDelay: 1000 - 30000, // ms,
    // retryOnMount,
    // select,
    // staleTime,
    // suspense,
    // structuralSharing,
  });

  // console.log(isError,error?.message,isLoading);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p className="bg-red-300 ">{error.message}</p>;
  }

  return (
    <div>
      <h2>Okay</h2>
      {data?.map(data => (
        <article
          className="bg-green-600 p-2 rounded-lg mb-2 text-white"
          key={data.id}
        >
          {data.name}
        </article>
      ))}
    </div>
  );
};

export default TestQueryComponent;
