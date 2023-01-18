
export interface Props { title: string }

export default function Informacoes({ title }: Props): Element {
  return(
    <div class="bg-red-900 w-full text-center p-2">
      <span class="text-white text-lg font-bold">{title}</span>
    </div>
  )
};