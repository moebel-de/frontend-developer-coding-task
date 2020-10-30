import React from 'react';
import styled from 'styled-components';

import { MessageInterface, MessageColors } from '../Models';

const MessageContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const MessageWrapper = styled.div`
  width: 240px;
  padding: .5em;
  box-shadow: 0 0 7px 0 gray;
  border-radius: 10px;
  right: 20px;
  margin-top: 20px;
`;

const MessageTitle = styled.h3`
  margin: 0 0 5px;
  font-family: 'roboto-black';
`;

export function MessagesComponent(props: { messages: MessageInterface[] }) {
  return (
    <MessageContainer>
      {
        props.messages.map((message, index) => 
            <MessageWrapper key={ index } style={{ background: MessageColors[message.type], bottom: `calc(${40 + (index * 40) }px)` }}>
              <MessageTitle title="Message Header">{ message.title }</MessageTitle>
              {
                !!message.details && 
                (
                  <div>
                    <hr />
                    <p>{ message.details }</p>
                  </div>
                )
              }
            </MessageWrapper>
        )
      }
    </MessageContainer>
  )
}