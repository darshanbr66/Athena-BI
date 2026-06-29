import { useState, useRef } from "react";

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

  const loadingRef = useRef(null);
  const resultRef = useRef(null);

  const handleAsk = async (question) => {

    try {

      setResponse(null);

      setLoading(true);

      setTimeout(() => {

        loadingRef.current?.scrollIntoView({

          behavior: "smooth",

          block: "center",

        });

      }, 100);

      const result = await askAthena(question);

      setResponse(result);

      setTimeout(() => {

        resultRef.current?.scrollIntoView({

          behavior: "smooth",

          block: "start",

        });

      }, 150);

    } catch (error) {

      console.error(error);

      alert("Failed to fetch data");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        overflow-x-hidden
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
          sm:py-10
        "
      >

        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-center
            leading-tight
          "
        >
          Athena-BI
        </h1>

        <p
          className="
            mt-3
            text-center
            text-slate-400
            text-sm
            sm:text-base
            max-w-2xl
            mx-auto
          "
        >
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

        <div ref={loadingRef}>

          {loading && <LoadingState />}

        </div>

        <div ref={resultRef}>

          {response && (

            <div
              className="
                mt-8
                sm:mt-10
                space-y-6
                sm:space-y-8
              "
            >

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

    </div>

  );

};

export default HomePage;