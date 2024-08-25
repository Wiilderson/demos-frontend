export interface Frame {
  demoId: string;
  id: string;
  html: string;
  order: number;
}

export interface Demo {
  id: string;
  name: string;
  frames: Frame[];
}
