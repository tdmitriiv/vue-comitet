<script lang="ts">
import { Vue } from 'vue-property-decorator';
import * as icons from 'vue-feather-icons';

export default Vue.extend({
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
  },
  render(h, ctx) {
    const featherIcons: Record<string, any> = icons;
    const { staticClass, attrs } = ctx.data;
    const { icon, ...props } = ctx.props;
    return h(featherIcons[icon], {
      props,
      attrs,
      class: {
        ...(staticClass && {
          [staticClass]: true,
        }),
      },
    });
  },
});
</script>
