type FileUploadProps = {
  label?: string;
  onChange: (file: File | null) => void;
  error?: string;
};

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0] || null);
  };

  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        type="file"
        onChange={handleChange}
        className="text-sm text-gray-600 w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
export default FileUpload;