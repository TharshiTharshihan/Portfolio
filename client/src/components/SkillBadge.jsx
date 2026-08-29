const SkillBadge = ({ name }) => {
  return (
    <span
      className="
        rounded-lg
        border border-slate-300
        bg-white
        px-3 py-2
        text-sm font-medium
        text-slate-700
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary
        hover:text-primary
        hover:shadow-sm
        dark:border-slate-600
        dark:bg-slate-700
        dark:text-slate-200
        dark:hover:border-primary
        dark:hover:text-primary
      "
    >
      {name}
    </span>
  );
};

export default SkillBadge;