interface MetricsInfoProps {
  title: string;
  value: string;
  description: string;
  titleColor?: string; // Optional prop for text color
  desktop?: boolean;
  percentage?: number;
}

const MetricsInfo = ({
  title,
  value,
  description,
  titleColor = "inherit",
  desktop = false,
  percentage,
}: MetricsInfoProps) => {
  return (
    <div className="w-64">
      <div className="text-6xl font-bold text-white mb-4">{percentage}</div>
      <div
        className="text-xl font-medium mb-0"
        style={{ color: desktop ? "#fff" : titleColor }}
      >
        {title}
      </div>
      <div
        className="text-2xl font-semibold mb-0"
        style={{ color: desktop ? "#fff" : titleColor }}
      >
        {value}
      </div>
      <div
        className="text-sm opacity-90 mb-4"
        style={{ color: desktop ? "#fff" : titleColor }}
      >
        {description}
      </div>
    </div>
  );
};

export default MetricsInfo;
