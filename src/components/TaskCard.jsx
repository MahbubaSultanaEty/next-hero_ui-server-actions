import { Card, Link } from "@heroui/react";



const TaskCard = ({ task }) => { 
    const {title, description, status } = task;
    return (
    <Card variant="outline" className="w-[400px] bg-gray-200  mx-auto">
    {/*    <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
      <Card.Header>
                <Card.Title>{title}!</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default TaskCard;