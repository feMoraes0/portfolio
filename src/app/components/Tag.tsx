
type TagProps = {
  text: string,
}

const Tag = ({ text }: TagProps) => {
  return (
    <strong className="text-base px-10 py-3 shadow-md rounded-xl mb-10 bg-cyan-600">
      { text }
    </strong>
  );
}

export default Tag;
