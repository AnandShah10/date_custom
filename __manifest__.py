# -*- coding: utf-8 -*-
{
    'name': 'date_custom',
    'version': '1.0',
    'summary': "Customizes Datetime field",
    'sequence': 10,
    'author': "Anand Shah",
    'description': """
Change default datetime field""",
    'category': 'Custom/fields',
    'depends': ['base','web'],
    'data': [
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
    'assets':{
        'web.assets_backend':[
            'date_custom/static/src/*',
        ],
    }
}
