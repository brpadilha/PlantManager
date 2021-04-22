// Para não dar erro na importação da imagem

declare module '*.png' {
  const content: any;
  export default content;
}