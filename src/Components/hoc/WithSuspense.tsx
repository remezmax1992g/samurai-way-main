import React, {ComponentType} from 'react';


export function WithSuspense<T>(Component: ComponentType<T>){
    return (props: T) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props as T}/>
        </React.Suspense>
    }
}


