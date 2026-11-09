interface PageTitleProps {
  titre: string;
  chapeau?: string;
}

export function PageTitle({ titre, chapeau }: PageTitleProps) {
  return (
    <div className="border-b bg-secondary-50">
      <div className="container py-10">
        <h1 className="heading-1 text-primary-800">{titre}</h1>
        {chapeau ? <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{chapeau}</p> : null}
      </div>
    </div>
  );
}
