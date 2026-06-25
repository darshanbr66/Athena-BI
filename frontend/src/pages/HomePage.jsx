import { useState } from "react";

import QueryInput from "../components/QueryInput";
import PipelineViewer from "../components/PipelineViewer";
import ResultsTable from "../components/ResultsTable";
import ResultsChart from "../components/ResultsChart";
import KPICards from "../components/KPICards";
import SuggestedQuestions from "../components/SuggestedQuestions";
import LoadingState from "../components/LoadingState";
import ExecutionDetails from "../components/ExecutionDetails";



import { askAthena } from "../services/api";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleAsk = async (question) => {
    try {
      setLoading(true);

      const result = await askAthena(question);

      setResponse(result);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto p-10">

        <h1 className="text-6xl font-bold text-center">
          Athena-BI
        </h1>

        <p className="text-center text-slate-400 mt-3">
          Autonomous Business Intelligence Platform
        </p>

        <QueryInput 
        onAsk={handleAsk}
        selectedQuestion={selectedQuestion} 
        />
        <SuggestedQuestions
          onSelect={(question) => {
            setSelectedQuestion(question);
            handleAsk(question);
          }}
        />

        {loading && <LoadingState />}

        {response && (
          <div className="mt-10 space-y-8">

            <KPICards
              data={response.data}
            />

            <ResultsChart
              data={response.data}
              question={response.question}
            />

            <ResultsTable
              data={response.data}
            />

            <ExecutionDetails
              execution={response.execution}
              pipeline={response.pipeline}
              totalRecords={response.totalRecords}
            />

            <PipelineViewer
              pipeline={response.pipeline}
            />

          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;