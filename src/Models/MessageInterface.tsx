
export const MessageColors = {
  'success': 'rgb(183, 241, 204)',
  'warning': 'rgb(230, 234, 170)',
  'error': 'rgb(234, 170, 170)'
}

export interface MessageInterface {
  type: 'success' | 'warning' | 'error',
  title: string;
  details?: string;
}
