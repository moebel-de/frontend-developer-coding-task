
export const MessageColors = {
  'success': '#b7f1cc',
  'warning': '#e6eaaa',
  'error': '#eaaaaa'
}

export interface MessageInterface {
  type: 'success' | 'warning' | 'error',
  title: string;
  details?: string;
}
