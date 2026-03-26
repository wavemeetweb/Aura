export default function StoryBar() {
  return (
    <div className="flex gap-3 p-3 overflow-x-auto">
      {[1,2,3].map(i => (
        <div key={i} className="w-12 h-12 bg-gray-700 rounded-full"></div>
      ))}
    </div>
  );
}
