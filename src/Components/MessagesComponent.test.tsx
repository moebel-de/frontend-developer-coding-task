import { wait } from '@testing-library/react';
import React from 'react';

import { MessageInterface, MessageColors } from '../Models';
import { MessagesComponentTemplate } from "../Testing";
import { MessagesComponent } from "./MessagesComponent";

describe('[Messaged Component]', () => {
  let template: MessagesComponentTemplate;
  let messages: MessageInterface[] = [
    { title: 'Test Title 1', type: 'success' },
    { title: 'Test Title 2', type: 'error', details: 'Test Details' },
    { title: 'Test Title 3', type: 'warning' },
  ];

  beforeEach(() => {
    template = new MessagesComponentTemplate(<MessagesComponent messages={messages} />);
  });

  it('should render', () => {
    expect(template.messagesContainer).toBeTruthy();
    expect(template.messagesList.length).toBe(3);
  });

  it('should show correct messages names', () => {
    expect(template.messagesList.map((message) => message.title)).toEqual(['Test Title 1', 'Test Title 2', 'Test Title 3']);
  });

  it('should show correct details if exist', () => {
    expect(template.messagesList.map((message) => message.details)).toEqual(['', 'Test Details', '']);
  });

  it('should show correct background color based on type', () => {
    expect(template.messagesList.map((message) => message.debug.style.background))
      .toEqual([MessageColors.success, MessageColors.error, MessageColors.warning]);
  });
});
