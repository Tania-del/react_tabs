/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-shadow */
import { Tab } from '../../types/Tab';

type ITabs = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<ITabs> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const isIdValid = (selectedTabId: string) => {
    return tabs.some((tab) => tab.id === selectedTabId);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={
                isIdValid(selectedTabId)
                  ? selectedTabId === tab.id
                    ? 'is-active'
                    : ''
                  : !index
                    ? 'is-active'
                    : ''
              }
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
