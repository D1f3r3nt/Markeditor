import {Home} from "./pages/home/Home.tsx";
import {SnackbarProvider} from "notistack";
import {Snackbar} from "./pages/components/atoms/Snackbar.tsx";

export function App() {

  return (
      <SnackbarProvider
        Components={{
          default: Snackbar,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        autoHideDuration={2000}
      >
        <Home />
      </SnackbarProvider>
  )
}
