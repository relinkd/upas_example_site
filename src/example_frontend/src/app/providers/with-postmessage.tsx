import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userModel } from 'entities/user';


export const WithPostMessage: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
          if (event.origin !== import.meta.env.VITE_UPAS_HUB) {
            return;
          }

          dispatch(userModel.userActions.updateUserState({
            postMessage: {
                type: event.data.type,
                data: event.data.payload
            }
          }))
        };
    
        window.addEventListener('message', handleMessage);
    
        return () => {
          window.removeEventListener('message', handleMessage);
        };
      }, []);

    return (
        <>
            {children}
        </>
    );
};
