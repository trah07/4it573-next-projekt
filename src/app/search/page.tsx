const SearchPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div>
      <h1 className="text-3xl">search page</h1>
      <div>
        <p className="text-xl">{JSON.stringify(searchParams)}</p>
      </div>
    </div>
  );
};

export default SearchPage;
