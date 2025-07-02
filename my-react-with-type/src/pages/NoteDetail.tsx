import Editor from "../components/Editor"
import TitleInput from "../components/TitleInput"



export default function NoteDetail() {
  return (
    <div className="pb-40 pt-20">
      <div className="md:max-w-3xl lg:md-max-w-4xl mx-auto">
        <TitleInput/>
        <Editor
        onChange={()=>{}}
        />
      </div>
    </div>
  )
}
