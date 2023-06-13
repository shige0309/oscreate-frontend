import React, { ReactNode } from 'react'
import './SubContent.css';

export const SubContent = ({children} : {children: ReactNode}) => {
  return (
    <div className="sub-content">{children}</div>
  )
}
