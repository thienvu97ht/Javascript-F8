
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes --> OK
// 6. Enhanced object liternals --> OK
// 7. Default paramter values --> OK
// 8. Destructuring --> OK
// 9. Rest paramters (...) --> OK
// 10. Spread (...) --> OK
// 11. Tagged template literal --> OK
// 12. Modules: Import / Export

import logger, {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
} from './logger.js';

logger('Test message...', TYPE_ERROR);