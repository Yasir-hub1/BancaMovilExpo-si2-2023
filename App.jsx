
import { Provider } from 'react-redux'; // Importa useDispatch
import { store } from './src1/Presentation/Redux/Store/store';
import RootNavigation from './src1/Presentation/Navigation/RootNavigation';

export default function App() {


  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
