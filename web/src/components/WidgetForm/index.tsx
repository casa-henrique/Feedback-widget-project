import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/thought.svg";

export type FeedbackType = keyof typeof feedbackTypes;

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    placeholder:
      "Algo não está funcionando? Me conte com detalhes o que está acontecendo...",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    placeholder:
      "Teve alguma ideia de melhoria ou funcionalidade? Me conte para eu adicionar",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    placeholder: "Me conte, o que gostaria de dizer?",
    image: {
      source: otherImageUrl,
      alt: "Imagem de um balão de pensamentos",
    },
  },
};

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">Feito com carinho</footer>
    </div>
  );
}
