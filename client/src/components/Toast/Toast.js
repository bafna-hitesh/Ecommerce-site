import { Toaster } from 'react-hot-toast';

export const Toast = () => {
   return (
      <Toaster
      containerStyle={{ top: '64px' }}
         position='top-right'
         // margin-top= '50rem'
         reverseOrder={false}
         toastOptions={{
            duration: 4000,
            success: {
               iconTheme: {
                  primary: '#059669',
               },
            },
            error: {
               iconTheme: {
                  primary: '#ff4d4f',
               },
            },
         }}
      />
   );
};
