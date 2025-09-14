import Approutes from "./routes/Approutes"
import { Provider } from "react-redux"
import { presistor, store } from "./redux/store/store"
import { PersistGate } from "redux-persist/integration/react"
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <Approutes />
      </PersistGate>
    </Provider>
  )
}

export default App