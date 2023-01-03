export default function SearchResult({ result, actions }: any) {

  const { rank, title } = result;

  return (
    <div className="container mx-auto flex">

      {/* content info */}
      <div className="flex">
        <span>#{rank}</span>
        <span>{title}</span>
      </div>

      {/* actions */}
      <div className="flex">
        {actions.map((action: any) => <Action />)}
      </div>

    </div>
  )

}

const Action = ({ action }: any) => (
  <div className="flex">

    <p>{action.description}</p>

    <button>{action.keystroke}</button>

  </div>
)