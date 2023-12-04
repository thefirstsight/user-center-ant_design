import { JUMP_LINK } from '@/constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '晨鸣项目';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'baidu',
          title: '快速百度',
          href: 'https://www.baidu.com/',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '学习资料',
          href: JUMP_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />晨鸣 GitHub</>,
          href: 'https://github.com/thefirstsight',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
