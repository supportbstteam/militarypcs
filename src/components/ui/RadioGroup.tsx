type Option = { label: string; value: string };

type RadioGroupProps = {
  name: string;
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ name, label, options, value, onChange, error }) => (
  <div className="space-y-1">
    {label && <p className="text-sm font-medium">{label}</p>}
    <div className="flex space-x-4">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="accent-blue-500"
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);
export default RadioGroup;