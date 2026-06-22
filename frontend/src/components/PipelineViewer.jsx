const PipelineViewer = ({ pipeline }) => {
  return (
    <details
      className="
        bg-slate-900
        p-5
        rounded-xl
      "
    >
      <summary
        className="cursor-pointer"
      >
        Generated Pipeline
      </summary>

      <pre className="mt-4 overflow-auto">
        {JSON.stringify(
          pipeline,
          null,
          2
        )}
      </pre>
    </details>
  );
};

export default PipelineViewer;