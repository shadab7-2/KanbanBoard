import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'link',
    'list', 'bullet', 'indent',
    'image', 'video'
  ];

  const handleChange = (content) => {
    console.log(content);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        formats={formats}
        onChange={handleChange}
        placeholder="Write something..."
        modules={{
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['image', 'video'],
            ['clean']
          ]
        }}
      />
    </div>
  );
};

export default QuillEditor;
