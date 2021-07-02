import React, { FC, useEffect } from 'react';

export interface IButtonProps {
}

const Button: FC<IButtonProps> = props => {

  useEffect(() => {
    console.log('demo')
  }, []);
  return (
    <div>
      <button>我是mf1的button</button>
    </div>
  );
}


export default Button;
