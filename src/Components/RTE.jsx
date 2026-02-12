import React from "react"
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"
import Conf from '../Conf/Conf'

export default function RTE({
  name = "content",
  control,
  label,
  defaultValue = "",
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={Conf.tinyMSCAPIKey}
            value={value}
            initialValue={defaultValue}
            onEditorChange={onChange}
            init={{
              height: 400,
              menubar: false,
              plugins:
                "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
              toolbar:
                "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | removeformat | help",
            }}
          />
        )}
      />
    </div>
  )
}
