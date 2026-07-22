import { Plus } from "@phosphor-icons/react/dist/ssr";

type FAQ = {
  question: string;
  answer: string[];
};

export function FAQList({ items }: { items: FAQ[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>
            <h3>{item.question}</h3>
            <Plus className="faq-item__icon" size={22} weight="regular" aria-hidden="true" />
          </summary>
          <div className="faq-item__answer">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
