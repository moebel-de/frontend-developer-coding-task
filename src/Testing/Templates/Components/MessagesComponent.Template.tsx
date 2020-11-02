import { ComponentTemplate } from "./Component.Template";

export class MessageElementTemplate {
  constructor(public debug: HTMLElement) {}

  get title(): string {
    const text = this.debug.querySelector('[title="Message Header"]')?.textContent;
    return !!text ? text.trim() : '';
  }

  get details(): string {
    const text = this.debug.querySelector('[data-testid="message-details"]')?.textContent;
    return !!text ? text.trim() : '';
  }
}

export class MessagesComponentTemplate extends ComponentTemplate {
  get messagesContainer(): HTMLElement {
    return this.root.getByTestId('messages-container');
  }

  get messagesList(): MessageElementTemplate[] {
    return this.root.getAllByTestId('messages-wrapper').map((el) => new MessageElementTemplate(el));
  }
}
