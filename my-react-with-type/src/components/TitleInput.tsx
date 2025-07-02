import TextAreaAutoSize from 'react-textarea-autosize'

export default function TitleInput() {
  return (
    <div>
      <TextAreaAutoSize
        className="text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F 
        resize-none"
      />
    </div>   
  )
}
