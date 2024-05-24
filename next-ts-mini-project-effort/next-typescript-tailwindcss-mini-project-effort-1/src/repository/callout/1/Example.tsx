import React from 'react'
import { COLORS,SPACING,BORDERS } from './design'

type CalloutProps = {
  message:string;
  type?:'success' | 'danger';
}

const Example:React.FC<CalloutProps> = ({message,type='success'}) => {
  const backgroundColor = type === 'success' ? COLORS.success : COLORS.danger;
  return (
    <div style={{...styles.callout,backgroundColor}}>
      {message} 
    </div>
  )
}

export default Example

const styles = {
  callout: {
    padding: SPACING.medium,
    borderRadius: BORDERS.radius,
    color: '#fff',
    margin: SPACING.small,
  },
} as const;