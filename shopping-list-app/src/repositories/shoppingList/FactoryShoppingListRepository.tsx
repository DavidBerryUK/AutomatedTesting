import useShoppingListMockRepository from "./UseShoppingListMockRepository";
import useShoppingListRepository from "./UseShoppingListRepository";

const useFactoryShoppingListRepository = () => {
  const repoMock = useShoppingListMockRepository();
  const repoLive = useShoppingListRepository();

  const useMockRepo = process.env.REACT_APP_USE_MOCK_REPOS === "true";

  return useMockRepo ? repoMock : repoLive;
};

export default useFactoryShoppingListRepository;
