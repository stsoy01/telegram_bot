export interface ButtonInterface {
  show(): void;
  hide(): void;
  setText(text: string): void;
}

export interface BackButtonInterface extends ButtonInterface {
  isVisible(): boolean;
  onClick(fn: Function): void
}
